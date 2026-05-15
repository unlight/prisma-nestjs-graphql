/**
 * Prisma NestJS/GraphQL Generator Configuration
 * Define all generator options in this structured object instead of
 * using the legacy flatten-style keys in the `schema.prisma` generator block.
 * @type {import('../src/types/external-config').ExternalConfig}
 * @example
 * ```schema.prisma
 * generator nestgraphql {
 *   provider = "prisma-nestjs-graphql"
 *   output = "../src/@generated"
 *   configFile = "./nestgraphql.config.mjs"
 * }
 * ```
 */
export default {
  importExtension: 'ts',
};
