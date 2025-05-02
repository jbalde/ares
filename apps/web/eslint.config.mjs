import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const aresConfig = { ignores: ["**/lib/db/prisma/*"] };

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	aresConfig,
];

export default eslintConfig;
