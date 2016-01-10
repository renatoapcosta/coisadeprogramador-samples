using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Sqlite;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<string>> Get()
        {
            var command = new SqliteCommand("SELECT text from word", ApplicationContext.Connection);

            var reader = command.ExecuteReader();

            var data = new List<string>();

            while (await reader.ReadAsync())
            {
                data.Add(reader.GetString(0));
            }

            return data;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<string> Get(int id)
        {
            string text = null;

            var command = new SqliteCommand("SELECT text from word where id=@id", ApplicationContext.Connection);
            command.Parameters.AddWithValue("@id", id);

            var reader = command.ExecuteReader();

            while (await reader.ReadAsync())
            {
                text = reader.GetString(0);
            }

            return text;
        }

        // POST api/values
        [HttpPost]
        public async Task Post([FromBody]string value)
        {
            using (var transaction = ApplicationContext.Connection.BeginTransaction())
            {
                var command = new SqliteCommand("INSERT INTO word (text) values (@text)", ApplicationContext.Connection, transaction);
                command.Parameters.AddWithValue("@text", value);

                await command.ExecuteNonQueryAsync();

                transaction.Commit();
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody]string value)
        {
            using (var transaction = ApplicationContext.Connection.BeginTransaction())
            {
                var command = new SqliteCommand("UPDATE word set text= @text where id = @id", ApplicationContext.Connection, transaction);
                command.Parameters.AddWithValue("@id", id);
                command.Parameters.AddWithValue("@text", value);

                await command.ExecuteNonQueryAsync();

                transaction.Commit();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            using (var transaction = ApplicationContext.Connection.BeginTransaction())
            {
                var command = new SqliteCommand("DELETE FROM word where id = @id", ApplicationContext.Connection, transaction);
                command.Parameters.AddWithValue("@id", id);

                await command.ExecuteNonQueryAsync();

                transaction.Commit();
            }
        }
    }
}
