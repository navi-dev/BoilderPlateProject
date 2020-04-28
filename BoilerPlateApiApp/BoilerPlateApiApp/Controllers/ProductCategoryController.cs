using BoilerPlateApiApp.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BoilerPlateApiApp.Controllers
{
    [Produces("application/json")]
    [Route("api/ProductCategories")]
    public class ProductCategoryController : Controller
    {
        [HttpGet]
        public List<ProductCategory> GetProductCategories()
        {
            return PrepareProductCategories();
        }

        private List<ProductCategory> PrepareProductCategories()
        {
            var productCategories = new List<ProductCategory>();
            for (int i = 0; i < 10; i++)
            {
                var productCategory = new ProductCategory()
                {
                    Name = "Category " + i,
                    Id = i,
                };

                productCategories.Add(productCategory);
            }

            return productCategories;
        }
    }
}