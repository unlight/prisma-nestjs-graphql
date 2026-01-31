import { Model } from '../types';

/**
 * Represents a dependency graph where keys are model names and values are sets of dependent model names
 */
export type DependencyGraph = Map<string, Set<string>>;

/**
 * Represents a set of model name pairs that have circular dependencies
 * Format: "ModelA:ModelB" where ModelA < ModelB alphabetically
 */
export type CircularDependencySet = Set<string>;

/**
 * Build a dependency graph from Prisma models based on their relations
 */
export function buildDependencyGraph(models: Model[]): DependencyGraph {
  const graph: DependencyGraph = new Map();

  // Initialize all models in the graph
  for (const model of models) {
    graph.set(model.name, new Set());
  }

  // Add edges for each relation field
  for (const model of models) {
    const dependencies = graph.get(model.name)!;
    for (const field of model.fields) {
      // Only consider object/relation fields that reference other models
      if (field.kind === 'object' && field.type !== model.name) {
        // Check if the referenced type is actually a model
        if (graph.has(field.type)) {
          dependencies.add(field.type);
        }
      }
    }
  }

  return graph;
}

/**
 * Detect all circular dependencies in the dependency graph using DFS
 * Returns a set of model pairs that form cycles
 */
export function detectCircularDependencies(graph: DependencyGraph): CircularDependencySet {
  const circularPairs: CircularDependencySet = new Set();
  const visited = new Set<string>();
  const recursionStack = new Set<string>();
  const path: string[] = [];

  function dfs(node: string): void {
    visited.add(node);
    recursionStack.add(node);
    path.push(node);

    const dependencies = graph.get(node) || new Set();
    for (const dep of dependencies) {
      if (!visited.has(dep)) {
        dfs(dep);
      } else if (recursionStack.has(dep)) {
        // Found a cycle - record all pairs in the cycle path
        const cycleStartIndex = path.indexOf(dep);
        if (cycleStartIndex !== -1) {
          const cyclePath = path.slice(cycleStartIndex);
          // Add all pairs in the cycle
          for (let i = 0; i < cyclePath.length; i++) {
            const a = cyclePath[i];
            const b = cyclePath[(i + 1) % cyclePath.length];
            // Store in alphabetical order for consistency
            const pair = a < b ? `${a}:${b}` : `${b}:${a}`;
            circularPairs.add(pair);
          }
        }
      }
    }

    path.pop();
    recursionStack.delete(node);
  }

  // Run DFS from each unvisited node
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return circularPairs;
}

/**
 * Check if two models have a circular dependency relationship
 */
export function hasCircularDependency(
  circularDeps: CircularDependencySet,
  modelA: string,
  modelB: string,
): boolean {
  const pair = modelA < modelB ? `${modelA}:${modelB}` : `${modelB}:${modelA}`;
  return circularDeps.has(pair);
}

/**
 * Get all models that are involved in any circular dependency
 */
export function getModelsInCircularDeps(circularDeps: CircularDependencySet): Set<string> {
  const models = new Set<string>();
  for (const pair of circularDeps) {
    const [a, b] = pair.split(':');
    models.add(a);
    models.add(b);
  }
  return models;
}

