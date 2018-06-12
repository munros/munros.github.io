﻿using System;
using System.Linq;
using ScotlandsMountains.StaticDataGenerator.Input;
using ScotlandsMountains.StaticDataGenerator.Models;
using ScotlandsMountains.StaticDataGenerator.Readers;

namespace ScotlandsMountains.StaticDataGenerator
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var dobihRecords = new DobihCsvReader()
                .Read(InputFiles.DobihCsv)
                .Where(x => x.Classification != null)
                .OrderByDescending(x => x.Height)
                .ToList();

            var classifications = new ModelFactory().CreateClassifications(dobihRecords);

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey(true);
        }
    }
}
