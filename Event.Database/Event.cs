using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Event.Database
{
    public class Event
    {
        public int Id { get;set; }
        [MaxLength(50)]
        public string Tttle { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public DateTime  Date { get; set; }
        public int EventTypeId { get; set; }
        [ForeignKey("EventTypeId")]
        public EventType Type { get; set; }

    }
}