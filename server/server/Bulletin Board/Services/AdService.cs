using Bulletin_Board.Models;
using System.Text.Json;
using System.Xml.Linq;

namespace Bulletin_Board.Services
{
    public class AdService
    {
        private const string AdsFilePath = "Data/ads.json";
        private List<Ad> ads;

        public AdService()
        {
            // Load ads from file
            ads = File.Exists(AdsFilePath)
                ? JsonSerializer.Deserialize<List<Ad>>(File.ReadAllText(AdsFilePath)) ?? new List<Ad>()
                : new List<Ad>();
        }

        public List<Ad> GetAllAds(string? locationFilter)
        {
            return string.IsNullOrEmpty(locationFilter)
                ? ads
                : ads.Where(ad => ad.Location.Contains(locationFilter)).ToList();
        }

        public Ad? GetAdById(int id) => ads.FirstOrDefault(ad => ad.Id == id);

        public Ad CreateAd(Ad newAd)
        {
            newAd.Id = ads.Any() ? ads.Max(a => a.Id) + 1 : 1;
            ads.Add(newAd);
            SaveAdsToFile();
            return newAd;
        }

        public Ad? UpdateAd(int id, Ad updatedAd)
        {
            var existingAd = GetAdById(id);
            if (existingAd != null)
            {
                existingAd.Title = updatedAd.Title;
                existingAd.Description = updatedAd.Description;
                existingAd.Location = updatedAd.Location;
                SaveAdsToFile();
            }
            return existingAd;
        }

        public bool DeleteAd(int id)
        {
            var adToRemove = GetAdById(id);
            if (adToRemove != null)
            {
                ads.Remove(adToRemove);
                SaveAdsToFile();
                return true;
            }
            return false;
        }

        private void SaveAdsToFile()
        {
            File.WriteAllText(AdsFilePath, JsonSerializer.Serialize(ads));
        }
    }
}
