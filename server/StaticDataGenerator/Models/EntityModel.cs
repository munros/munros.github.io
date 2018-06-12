using System.Collections.Generic;
using HashidsNet;

namespace ScotlandsMountains.StaticDataGenerator.Models
{
    public abstract class EntityModel
    {
        protected EntityModel(string name)
        {
            Name = name;
            Id = GetId();
        }

        public string Id { get; }

        public string Name { get; }

        private string GetId()
        {
            var key = GetType().FullName;

            if (!IdGenerators.ContainsKey(key))
                IdGenerators.Add(key, new IdGenerator(key));

            return IdGenerators[key].NextId();
        }

        private static readonly IDictionary<string,IdGenerator> IdGenerators = new Dictionary<string, IdGenerator>();

        private class IdGenerator
        {
            private const int MinHashLength = 8;
            private readonly Hashids _hashids;
            private int _lastTerm = 0;

            public IdGenerator(string salt)
            {
                _hashids = new Hashids(salt, MinHashLength);
            }

            public string NextId()
            {
                _lastTerm++;
                return _hashids.Encode(_lastTerm);
            }
        }
    }
}