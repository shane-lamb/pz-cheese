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
                        Name = "Brie",
                        Color = "Cream",
                        ImageUrl = "https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg",
                        PricePerKilo = (decimal) 49.99
                    });

                context.SaveChanges();
            }
        }
    }
}