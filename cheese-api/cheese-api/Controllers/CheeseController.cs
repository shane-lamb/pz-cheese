using System.Collections.Generic;
using cheese_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace cheese_api.Controllers
{
    [ApiController]
    [Route("/cheeses")]
    [Consumes("application/json")]
    [Produces("application/json")]
    public class CheeseController : ControllerBase
    {
        /// <summary>
        /// Get a list of all cheeses
        /// </summary>
        [HttpGet]
        public List<CheeseResponse> Get()
        {
            return new List<CheeseResponse>();
        }
        
        /// <summary>
        /// Create a cheese
        /// </summary>
        [HttpPost]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully created the cheese", typeof(CheeseResponse))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Invalid request body", typeof(ErrorResponse))]
        public CheeseResponse Create(CheeseRequest request)
        {
            return new CheeseResponse();
        }

        /// <summary>
        /// Update a cheese
        /// </summary>
        [HttpPut("{id}")]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully updated the cheese")]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Could not find a cheese matching given ID", typeof(ErrorResponse))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Invalid request body", typeof(ErrorResponse))]
        public void Update(long id, CheeseRequest request)
        {
            
        }
        
        /// <summary>
        /// Delete a cheese
        /// </summary>
        [HttpDelete("{id}")]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully deleted the cheese")]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Could not find a cheese matching given ID", typeof(ErrorResponse))]
        public void Delete(long id)
        {
            
        }
    }
}
