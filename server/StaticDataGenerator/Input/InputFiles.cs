using System.IO;
using System.Reflection;

namespace ScotlandsMountains.StaticDataGenerator.Input
{
    public static class InputFiles
    {
        public static Stream DobihCsv => 
            Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof(InputFiles).Namespace + ".hillcsv.zip");


    }
}
