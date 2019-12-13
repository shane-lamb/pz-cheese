using Newtonsoft.Json;

namespace CheeseApi.Models
{
    public class ErrorResponse
    {
        /// <example>(Description of the error)</example>>
        [JsonProperty(Required = Required.DisallowNull)]
        public string Message { get; set; }
    }
}
