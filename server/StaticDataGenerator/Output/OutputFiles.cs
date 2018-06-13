using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ScotlandsMountains.StaticDataGenerator.Models;

namespace ScotlandsMountains.StaticDataGenerator.Output
{
    public static class OutputFiles
    {
        public static void Write(IList<ClassificationModel> classifications)
        {
            var root = Path.Combine(GetRootDirectory(), "classification");

            var indexJson = JsonConvert.SerializeObject(classifications.Select(x => new {x.Id, x.Name}));
            File.WriteAllText(Path.Combine(root, "index.json"), indexJson);

            foreach (var classification in classifications)
            {
                var json = JsonConvert.SerializeObject(classification.Mountains, JsonSerializerSettings);
                File.WriteAllText(Path.Combine(root, $"{classification.Name.ToLower()}.json"), json);
            }
        }

        private static string GetRootDirectory()
        {
            var uri = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase);
            var path = new Uri(uri).LocalPath;
            var dir = new DirectoryInfo(path);

            return Path.Combine(dir.Parent.Parent.FullName, "Output");
        }

        private static readonly JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            Formatting = Formatting.Indented
        };
    }
}
