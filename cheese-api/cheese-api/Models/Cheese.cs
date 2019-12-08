namespace cheese_api.Models
{
    public class Cheese
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Color { get; set; }
        public decimal PricePerKilo { get; set; }
    }
}
