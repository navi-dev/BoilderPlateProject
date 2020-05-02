﻿namespace BoilerPlateApiApp.Model
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public string Tag { get; set; }
        public decimal Price { get; set; }
    }
}
