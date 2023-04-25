import { NodePath, PluginItem } from '@babel/core';

export function evaluateIfConfident(
    path?: NodePath<any> | null,
): any {
    if (!path || !path.node) {
        return null;
    }

    const evaluation = path.evaluate();

    if (evaluation.confident) {
        return evaluation.value;
    }

    return null;
}

export default function (): PluginItem {
    return {
        visitor: {
            CallExpression(path, state) {
                const args = path.get('arguments');
                const keyEvaluation = evaluateIfConfident(args[0]);

                if (typeof keyEvaluation === 'string') {
                    console.log(keyEvaluation);
                }
            },
        },
    };
}
