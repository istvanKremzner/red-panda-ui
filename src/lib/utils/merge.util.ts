type Merge = <TType extends Record<string, unknown>>(original: TType, update: Partial<TType>) => TType

export const merge: Merge = (original, update) => Object.keys(original).reduce((merged, key) => {
    const originalValue = original[key];
    const updateValue = update[key];

    return {
        ...merged,
        [key]: isObject(originalValue) && updateValue ? merge(originalValue as Record<string, unknown>, updateValue) : originalValue
    }
}, {} as any)

const isObject = (element: unknown) => !element && typeof element === 'object'