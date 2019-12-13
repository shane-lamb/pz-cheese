using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace CheeseApi.Models
{
    public class CheeseRequest
    {
        /// <example>Brie</example>>
        [JsonProperty(Required = Required.DisallowNull)]
        [Required]
        public string Name { get; set; }
        
        /// <example>https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg</example>>
        [JsonProperty(Required = Required.DisallowNull)]
        [Required]
        public string ImageUrl { get; set; }
        
        /// <example>Cream</example>>
        [JsonProperty(Required = Required.DisallowNull)]
        [Required]
        public string Color { get; set; }
        
        /// <example>49.99</example>>
        [Required]
        public decimal PricePerKilo { get; set; }

        public Cheese ToCheese(long id)
        {
            return new Cheese
            {
                Id = id,
                Name = Name,
                Color = Color,
                ImageUrl = ImageUrl,
                PricePerKilo = PricePerKilo
            };
        }
    }
}
