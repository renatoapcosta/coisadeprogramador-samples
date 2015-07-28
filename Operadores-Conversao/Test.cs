//
// How To Compile: 
//	> csc.exe Test.cs
//
using System;

public class SuperHero
{
	public string Name { get; set; }
	
	public string RealName { get; set; }
}
 
public class Human
{
	public string Name { get; set; }
	
	public static implicit operator Human(string name)
	{
		if(string.IsNullOrWhiteSpace(name))
			return null;
		
		return new Human()
		{
			Name = name
		};
	}
	
	public static explicit operator Human(SuperHero superHero)
	{
		if(superHero == null)
			return null;
		
		return new Human()
		{
			Name = superHero.RealName
		};
	}
}


class TestApp
{
	static void Main()
	{
		var superHero = new SuperHero()
		{
			Name = "Black Panther",
			RealName = "T'Challa"
		};
		
		//Implicit
		Human human = superHero.RealName;
		
		//Explicit
		Human human2 = (Human) superHero;
		
		Console.WriteLine("It works!");
	}
}