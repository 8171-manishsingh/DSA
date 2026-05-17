// Memory Calculator
// Computes memory usage for common primitive types and simple arrays.

const MEMORY_UNITS = {
    byte: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024
};

const bytesToUnit = (bytes, unit = 'mb') => {
    const divisor = MEMORY_UNITS[unit];
    if (!divisor) throw new Error('Invalid unit. Use: byte, kb, mb, gb');
    return bytes / divisor;
};

// Approximate memory sizes (common assumptions for DSA/DS practice)
const TYPE_SIZES_BYTES = {
    number: 8,      // JS number is typically 64-bit float
    boolean: 4,
    char: 2,
    string: 2,      // per character (UTF-16 in many JS engines)
    bigint: 16
};

const normalizeUnit = (unit) => (unit ? String(unit).toLowerCase() : 'mb');

// Computes memory for a string assuming UTF-16 (2 bytes per char)
const calcStringBytes = (str) => {
    const s = String(str);
    return s.length * TYPE_SIZES_BYTES.string;
};

// Computes memory for an array by summing element sizes (shallow)
// Example: memoryOfArray([1,2,3])
const memoryOfArray = (arr, unit = 'mb') => {
    if (!Array.isArray(arr)) throw new TypeError('arr must be an array');

    let totalBytes = 0;

    for (const el of arr) {
        if (typeof el === 'number') totalBytes += TYPE_SIZES_BYTES.number;
        else if (typeof el === 'boolean') totalBytes += TYPE_SIZES_BYTES.boolean;
        else if (typeof el === 'bigint') totalBytes += TYPE_SIZES_BYTES.bigint;
        else if (typeof el === 'string') totalBytes += calcStringBytes(el);
        else {
            // For objects/undefined/null/functions we can't know size reliably in JS.
            // Use a conservative placeholder.
            totalBytes += 8;
        }
    }

    return {
        bytes: totalBytes,
        unit: normalizeUnit(unit),
        value: bytesToUnit(totalBytes, normalizeUnit(unit))
    };
};

// Generic: compute memory for primitives or strings or arrays.
// Returns { bytes, value, unit }
const memoryOf = (value, unit = 'mb') => {
    const u = normalizeUnit(unit);

    if (typeof value === 'number') {
        const bytes = TYPE_SIZES_BYTES.number;
        return { bytes, unit: u, value: bytesToUnit(bytes, u) };
    }

    if (typeof value === 'boolean') {
        const bytes = TYPE_SIZES_BYTES.boolean;
        return { bytes, unit: u, value: bytesToUnit(bytes, u) };
    }

    if (typeof value === 'bigint') {
        const bytes = TYPE_SIZES_BYTES.bigint;
        return { bytes, unit: u, value: bytesToUnit(bytes, u) };
    }

    if (typeof value === 'string') {
        const bytes = calcStringBytes(value);
        return { bytes, unit: u, value: bytesToUnit(bytes, u) };
    }

    if (Array.isArray(value)) return memoryOfArray(value, u);

    // For objects and other types
    // JS runtime memory size is not directly measurable; return approximation.
    const bytes = 8;
    return { bytes, unit: u, value: bytesToUnit(bytes, u) };
};

// --------- Demo (can be removed) ---------
// Uncomment to test:
// console.log(memoryOf(123, 'mb'));
// console.log(memoryOf('hello', 'kb'));
// console.log(memoryOf([1, 2, 3, 4], 'bytes'));

module.exports = {
    memoryOf,
    memoryOfArray,
    bytesToUnit,
    MEMORY_UNITS
};

