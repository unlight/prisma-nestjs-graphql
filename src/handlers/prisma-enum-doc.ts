// utils/prisma-enum-doc.ts

type EnumValueDocInfo = { description: string } | { deprecationReason: string };

export function extractEnumValueDocs(
  values: readonly { name: string; [key: string]: any }[],
): Record<string, EnumValueDocInfo> {
  return Object.fromEntries(
    values
      .map((value): [string, EnumValueDocInfo] | null => {
        const { name } = value;
        const documentation: unknown = value.documentation;

        if (typeof documentation !== 'string') return null;

        if (documentation.startsWith('@deprecated')) {
          return [name, { deprecationReason: documentation.slice(11).trim() }];
        }

        return [name, { description: documentation }];
      })
      .filter((entry): entry is [string, EnumValueDocInfo] => entry !== null),
  );
}
