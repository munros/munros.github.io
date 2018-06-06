using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScotlandsMountains.StaticDataGenerator.Records
{
    public class DobihRecord
    {
        private readonly string[] _record;

        public DobihRecord(string[] record)
        {
            _record = record;
        }

        public string Name => _record[0];
        public string RegionNumber => _record[0];
        public string RegionName => _record[0];
        public string Height => _record[0];
        public string Latitude => _record[0];
        public string Longitude => _record[0];
        public string Maps1To50000 => _record[0];
        public string Maps1To25000 => _record[0];
    }
}
