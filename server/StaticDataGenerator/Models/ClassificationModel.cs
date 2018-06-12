using System.Collections.Generic;

namespace ScotlandsMountains.StaticDataGenerator.Models
{
    public class ClassificationModel : EntityModel
    {
        public ClassificationModel(string name)
            : base(name)
        { }

        public IList<MountainModel> Mountains { get; } = new List<MountainModel>();
    }
}
