using System;
using System.IO;

public class Program
{
    public static void Main()
    {
        var content = File.ReadAllText("Hello-vNext.txt");
        
        Console.WriteLine("--------------- Hello ASP.NET vNext ---------------");
        
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine(content);
        Console.ResetColor();
        
        Console.WriteLine("---------------------------------------------------");
    }
}
