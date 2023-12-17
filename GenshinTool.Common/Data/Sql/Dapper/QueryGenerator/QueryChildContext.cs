using GenshinTool.Common.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator
{
    public class QueryChildContext<TParent, TChild> : IQueryChildContext
    {
        public Expression<Func<TParent, long?>> ParentKey { get; set; }
        public Expression<Func<TChild, long?>> ChildKey { get; set; }

        public Expression<Func<TParent, IEnumerable<TChild>>> PropertyIenumerableToSetFunc { get; set; }
        public Expression<Func<TParent, TChild>> PropertyToSetFunc { get; set; }
        public long? FilterOnParentAggregateKeyId { get; set; }
        public Dictionary<string, IEnumerable<long>> FilterOnChildKeys { get; set; }
        public IQueryChildContext QueryChilderContext { get; set; }

        public Type GetChildType()
        {
            return typeof(TChild);
        }
        public Type GetParentType()
        {
            return typeof(TParent);
        }

        public string GetParentKeyPropertyName()
        {
            return ParentKey.GetPropertyName();
        }

        public string GetChildKeyPropertyName()
        {
            return ChildKey.GetPropertyName();
        }

        public string GetPropertyNameToSet()
        {
            if (!IsManyLink())
            {
                return GetPropertyName(PropertyToSetFunc);
            }

            return GetPropertyName(PropertyIenumerableToSetFunc);

        }

        public bool IsManyLink()
        {
            return PropertyToSetFunc == null;
        }

        private static string GetPropertyName<T>(Expression<Func<T, IEnumerable<TChild>>> memberLambda)
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

        private static string GetPropertyName<T>(Expression<Func<T, TChild>> memberLambda)
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
}