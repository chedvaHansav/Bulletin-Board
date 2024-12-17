namespace Bulletin_Board.Models
{
    public class Ad
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; } // e.g., latitude and longitude as a string
        public string Creator { get; set; } // User who created the ad
    }
}
