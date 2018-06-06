using System;
using ScotlandsMountains.StaticDataGenerator.Input;
using ScotlandsMountains.StaticDataGenerator.Readers;

namespace ScotlandsMountains.StaticDataGenerator
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var dobihRecords = new DobihCsvReader().Read(InputFiles.DobihCsv);

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey(true);
        }
    }
}
