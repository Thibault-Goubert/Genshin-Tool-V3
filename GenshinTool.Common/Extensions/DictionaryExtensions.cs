namespace GenshinTool.Common.Extensions;

public static class DictionaryExtensions
{
    public static TValue? Get<TKey, TValue>(this IDictionary<TKey, TValue> dict, TKey key)
    {
        if (dict == null)
        {
            throw new ArgumentNullException(nameof(dict));
        }

        if (dict.TryGetValue(key, out var value))
        {
            return value;
        }

        return default;
    }
}
