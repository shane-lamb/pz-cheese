using CheeseApi.Models;

namespace CheeseApi.DataContext
{
    public static class DataGenerator
    {
        public static void Initialize(CheeseDbContext context)
        {
            using (context)
            {
                context.Cheeses.AddRange(
                    new Cheese()
                    {
                        Id = 1,
                        Name = "Mozzarella",
                        Color = "White",
                        ImageUrl = "https://cheese.com/media/img/cheese/Mozzarella.jpg",
                        PricePerKilo = (decimal) 9.99
                    },
                    new Cheese()
                    {
                        Id = 2,
                        Name = "Sage Derby",
                        Color = "Green",
                        ImageUrl = "https://cheese.com/media/img/cheese/Sage_derby_cheese.jpg",
                        PricePerKilo = (decimal) 60
                    },
                    new Cheese()
                    {
                        Id = 3,
                        Name = "Maasdam",
                        Color = "Pale yellow",
                        ImageUrl = "https://cheese.com/media/img/cheese/wiki/maasdam.jpg",
                        PricePerKilo = (decimal) 21.5
                    },
                    new Cheese()
                    {
                        Id = 4,
                        Name = "Petit-Suisse",
                        Color = "White",
                        ImageUrl = "https://cheese.com/media/img/cheese/800px-Petit-suisse_pot.jpg",
                        PricePerKilo = (decimal) 25
                    },
                    new Cheese()
                    {
                        Id = 5,
                        Name = "Maytag Blue",
                        Color = "Cream",
                        ImageUrl = "https://cheese.com/media/img/cheese/maytag-blue-wedges.jpg",
                        PricePerKilo = (decimal) 45
                    }
                );

                context.SaveChanges();
            }
        }
    }
}