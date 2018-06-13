using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Newtonsoft.Json;
using ScotlandsMountains.StaticDataGenerator.Models;

namespace ScotlandsMountains.StaticDataGenerator.Output
{
    public static class OutputFiles
    {
        public static void Write(IList<ClassificationModel> classifications)
        {
            var root = GetRooDirectory();
            foreach (var classification in classifications)
            {
                var json = JsonConvert.SerializeObject(classification.Mountains);
                File.WriteAllText(Path.Combine(root, $"{classification.Name.ToLower()}.json"), json);
            }
        }

        private static string GetRooDirectory()
        {
            var uri = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase);
            var path = new Uri(uri).LocalPath;
            var dir = new DirectoryInfo(path);

            return Path.Combine(dir.Parent.Parent.FullName, "Output");
        }
    }
}
