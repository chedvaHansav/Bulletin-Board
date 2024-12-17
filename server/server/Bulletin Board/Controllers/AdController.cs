using Bulletin_Board.Models;
using Bulletin_Board.Services;
using Microsoft.AspNetCore.Mvc;

namespace Bulletin_Board.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AdController : ControllerBase
    {
        private readonly AdService adService;

        public AdController()
        {
            adService = new AdService();
        }

        [HttpGet]
        public IActionResult GetAllAds([FromQuery] string? locationFilter)
        {
            return Ok(adService.GetAllAds(locationFilter));
        }

        [HttpPost]
        public IActionResult CreateAd([FromBody] Ad newAd)
        {
            var createdAd = adService.CreateAd(newAd);
            return CreatedAtAction(nameof(GetAllAds), new { id = createdAd.Id }, createdAd);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAd(int id, [FromBody] Ad updatedAd)
        {
            var ad = adService.UpdateAd(id, updatedAd);
            return ad == null ? NotFound() : Ok(ad);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAd(int id)
        {
            var success = adService.DeleteAd(id);
            return success ? Ok() : NotFound();
        }
    }
}