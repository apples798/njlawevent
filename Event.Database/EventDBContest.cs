using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Event.Database
{
    public class EventDBContext:DbContext
    {
        public EventDBContext(DbContextOptions<EventDBContext> options) 
            :base(options) 
        {
            Database.EnsureCreated();
        }

        public DbSet<Event> Events { get; set; }  
        public DbSet<EventType> EventsTypes { get; set; }
    }
}
