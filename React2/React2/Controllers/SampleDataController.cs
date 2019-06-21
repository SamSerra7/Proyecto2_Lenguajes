using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace React2.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Producto> Products(string summary)
        {

            List<Producto> products = new List<Producto>();
            for (int i = 0; i < 50; i++)
            {
                products.Add(new Producto(
                    $@"Toyota 20{i}",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJVc6wVmlXRrgOh-DqYK26-Nx-UK9bv403NCmdjPUXo9AM6bL",
                    $@"Conoce el Toyota 20{i} es el híbrido y autorecargable",
                    20400 * i,
                    i                    
                ));
            }




            if (!string.IsNullOrEmpty(summary))
            {
                products.Where(p => p.Summary.Contains(summary) || p.Title.Contains(summary));
            };

            return products;
        }


        public class Producto
        {

            public Producto(string title, string image, string summary, decimal price, int amount)
            {
                Title = title;
                Image = image;
                Summary = summary;
                Price = price;
                Amount = amount;
            }


            public string Title { get; set; }


            public string Image { get; set; }

            public string Summary { get; set; }

            public decimal Price { get; set; }

            public int Amount { get; set; }
        }


        
            /*


                private static string[] Summaries = new[]
            {
                "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };

            [HttpGet("[action]")]
            public IEnumerable<WeatherForecast> WeatherForecasts(int startDateIndex)
            {
                var rng = new Random();
                return Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                });
            }

            public class WeatherForecast
            {
                public string DateFormatted { get; set; }
                public int TemperatureC { get; set; }
                public string Summary { get; set; }

                public int TemperatureF
                {
                    get
                    {
                        return 32 + (int)(TemperatureC / 0.5556);
                    }
                }
            }
        */


        }
}
