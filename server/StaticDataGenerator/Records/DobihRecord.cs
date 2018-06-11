using System;
using System.Collections.Generic;
using System.Linq;

namespace ScotlandsMountains.StaticDataGenerator.Records
{
    public class DobihRecord
    {
        private readonly string[] _record;

        public DobihRecord(string[] record)
        {
            _record = record;
        }

        public string Name => _record[NameField.Index];
        public string RegionNumber => ParseRegionNumber();
        public string RegionName => ParseRegionName();
        public double Height => double.Parse(_record[HeightField.Index]);
        public double Latitude => double.Parse(_record[LatitudeField.Index]);
        public double Longitude => double.Parse(_record[LongitudeField.Index]);
        public List<string> Maps1To50000 => ParseMapsFrom(_record[Maps1To50000Field.Index]);
        public List<string> Maps1To25000 => ParseMapsFrom(_record[Maps1To25000Field.Index]);
        public string Classification => GetClassification();

        private string ParseRegionNumber()
        {
            return _record[RegionField.Index]
                .Split(new[] {":"}, StringSplitOptions.RemoveEmptyEntries)[0]
                .Trim()
                .TrimStart('0');
        }

        private string ParseRegionName()
        {
            return _record[RegionField.Index]
                .Split(new[] {":"}, StringSplitOptions.RemoveEmptyEntries)[1]
                .Trim();
        }

        private List<string> ParseMapsFrom(string s)
        {
            return s.Split(new[] {" "}, StringSplitOptions.RemoveEmptyEntries).ToList();
        }

        private string GetClassification()
        {
            if (_record[IsMunroField.Index] == IsInClassification) return "Munro";
            if (_record[IsCorbettField.Index] == IsInClassification) return "Corbett";
            if (_record[IsGrahamField.Index] == IsInClassification) return "Graham";
            return null;
        }

        private static readonly Field NameField = new Field("Name", 1);
        private static readonly Field RegionField = new Field("Region", 5);
        private static readonly Field Maps1To50000Field = new Field("Map 1:50k", 11);
        private static readonly Field Maps1To25000Field = new Field("Map 1:25k", 12);
        private static readonly Field HeightField = new Field("Metres", 13);
        private static readonly Field LatitudeField = new Field("Latitude", 33);
        private static readonly Field LongitudeField = new Field("Longitude", 34);
        private static readonly Field IsMunroField = new Field("M", 48);
        private static readonly Field IsCorbettField = new Field("C", 51);
        private static readonly Field IsGrahamField = new Field("G", 52);

        private class Field
        {
            public Field(string name, int index)
            {
                Name = name;
                Index = index;
            }

            public string Name { get; }
            public int Index { get; }
        }

        private const string IsInClassification = "1";
    }
}
