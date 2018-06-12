using System.Collections.Generic;
using System.Linq;
using ScotlandsMountains.StaticDataGenerator.Records;

namespace ScotlandsMountains.StaticDataGenerator.Models
{
    public class MountainModel : EntityModel
    {
        public MountainModel(DobihRecord record, ClassificationModel classification)
            : base(record.Name)
        {
            RegionNumber = record.RegionNumber;
            RegionName = record.RegionName;
            Height = record.Height;
            Latitude = record.Latitude;
            Longitude = record.Longitude;
            LandrangerMaps = record.Maps1To50000.Select(x => x).ToList();
            ExplorerMaps = record.Maps1To25000.Select(x => x).ToList();

            Number = classification.Mountains.Count + 1;
            classification.Mountains.Add(this);
        }

        public int Number { get; }
        public string RegionNumber { get; }
        public string RegionName { get; }
        public double Height { get; }
        public double Latitude { get; }
        public double Longitude { get; }
        public List<string> LandrangerMaps { get; }
        public List<string> ExplorerMaps { get; }
    }
}