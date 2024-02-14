using System.Text;

namespace SGFs_to_JS_List
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string sgfRootPath = @"D:\Other\Mega\MEGAsync\Go\SGF\AI-Training-Data\GoTrainer-HumanAI-joseki";
            IEnumerable<string> sgfPaths = Directory.EnumerateFiles(sgfRootPath, "*.sgf", SearchOption.AllDirectories);

            int i = 0;
            StringBuilder stringBuilder = new();
            foreach (string sgfPath in sgfPaths)
            {
                string sgfContent = File.ReadAllText(sgfPath);
                // remove (;FF[4]GM[1]SZ[19]PB[]PW[]HA[0]KM[6.5]RU[Japanese];
                sgfContent = sgfContent.Substring(51);

                stringBuilder.Append("\t\"");
                stringBuilder.Append(sgfContent);
                stringBuilder.AppendLine("\",");

                i++;
                //if (i == 50)
                //    break;
            }

            File.WriteAllText("sgfs.txt", stringBuilder.ToString());
        }
    }
}
