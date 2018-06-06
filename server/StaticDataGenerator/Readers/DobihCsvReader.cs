using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using Microsoft.VisualBasic.FileIO;
using ScotlandsMountains.StaticDataGenerator.Records;

namespace ScotlandsMountains.StaticDataGenerator.Readers
{
    public class DobihCsvReader
    {
        public IList<DobihRecord> Read(Stream stream)
        {

            using (var zipArchive = new ZipArchive(stream))
            using (var zipEntry = zipArchive.Entries[0].Open())
            using (var textFieldParser = new TextFieldParser(zipEntry)
            {
                TextFieldType = FieldType.Delimited,
                Delimiters = new []{","},
                HasFieldsEnclosedInQuotes = true,
                TrimWhiteSpace = true
            })
            {
                var records = new List<DobihRecord>();

                textFieldParser.ReadLine(); // discard headers

                while (!textFieldParser.EndOfData)
                {
                    var fields = textFieldParser.ReadFields();
                    var record = new DobihRecord(fields);
                    records.Add(record);
                }

                return records;
            }
        }
    }
}
