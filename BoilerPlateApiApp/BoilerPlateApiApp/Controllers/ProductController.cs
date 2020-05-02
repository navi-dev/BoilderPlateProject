using BoilerPlateApiApp.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BoilerPlateApiApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Product")]
    public class ProductController : Controller
    {
        [HttpGet]
        public List<Product> GetProducts()
        {
            return PrepareProducts();
        }

        private List<Product> PrepareProducts()
        {
            var products = new List<Product>();
            for (int i = 0; i < 10; i++)
            {
                var product = new Product()
                {
                    Name = "Product " + i,
                    Description = "Description " + i,
                    CategoryId = i,
                    Id = i,
                    Tag = "Tag " + i,
                    Price = 100 + i,

                };

                products.Add(product);
            }

            return products;
        }
    }
}