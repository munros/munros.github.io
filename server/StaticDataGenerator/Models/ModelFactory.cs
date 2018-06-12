using System.Collections.Generic;
using System.Linq;
using Humanizer;
using ScotlandsMountains.StaticDataGenerator.Records;

namespace ScotlandsMountains.StaticDataGenerator.Models
{
    public class ModelFactory
    {
        public IList<ClassificationModel> CreateClassifications(List<DobihRecord> records)
        {
            var classifications = new List<ClassificationModel>();

            foreach (var record in records)
            {
                var classification = record.Classification.Pluralize();
                if (classifications.All(x => x.Name != classification))
                    classifications.Add(new ClassificationModel(classification));

                new MountainModel(record, classifications.Single(x => x.Name == classification));
            }

            return classifications;
        }
    }
}
