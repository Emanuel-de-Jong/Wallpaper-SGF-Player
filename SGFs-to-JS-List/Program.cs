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
                stringBuilder.Append("\t[\"");
                stringBuilder.Append(Path.GetFileNameWithoutExtension(sgfPath));
                stringBuilder.Append("\", \"");
                stringBuilder.Append(File.ReadAllText(sgfPath));
                stringBuilder.AppendLine("\"],");

                i++;
                //if (i == 50)
                //    break;
            }

            File.WriteAllText("sgfs.txt", stringBuilder.ToString());
        }
    }
}
