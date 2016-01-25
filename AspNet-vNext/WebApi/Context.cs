using System;
using System.Data;
using Microsoft.Data.Sqlite;

public static class ApplicationContext
{
    public static SqliteConnection Connection { get; private set; }
    
    public static void Initialize()
    {
        Connection = new SqliteConnection("Data Source=database.sqlite");
        Connection.Open();
    }
    
}