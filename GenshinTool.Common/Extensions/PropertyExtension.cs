using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Extensions;


public static class PropertyExtension
{
    public static PropertyInfo GetIEnumerableOfTypeProperty(this Type obj, Type typeToSearch)
    {
        PropertyInfo res = null;
        if (obj != null)
        {
            var iEnumerableProperties = obj.GetProperties().Where(x =>
                x.PropertyType.IsGenericType && x.PropertyType.GetGenericTypeDefinition() == typeof(IEnumerable<>));
            res = iEnumerableProperties.FirstOrDefault(x =>
                x.PropertyType.GetGenericArguments().FirstOrDefault() == typeToSearch);
        }

        return res;
    }

    public static MethodInfo GetMethodInfoOfParamTypeAndReturnType(this Type obj, string name, Type paramType)
    {
        MethodInfo res = null;
        if (obj != null)
        {
            res = obj.GetMethods().FirstOrDefault(x =>
                x.Name == name && x.IsGenericMethod && x.GetParameters().Length == 1
                && Enumerable.First<ParameterInfo>(x.GetParameters()).ParameterType == paramType);
        }

        return res;
    }

    public static string GetPropertyName<T>(this Expression<Func<T, long?>> memberLambda)
    {
        if (memberLambda == null)
        {
            throw new ArgumentNullException(nameof(memberLambda));
        }

        var expressionBody = memberLambda.Body;
        if (expressionBody is UnaryExpression expression && expression.NodeType == ExpressionType.Convert)
        {
            expressionBody = expression.Operand;
        }

        if (expressionBody is UnaryExpression)
        {
            var memberEx = ((UnaryExpression)expressionBody).Operand as MemberExpression;
            return memberEx?.Member.Name;
        }

        var memberSelectorExpression = (MemberExpression)expressionBody;
        return memberSelectorExpression.Member.Name;
    }
}