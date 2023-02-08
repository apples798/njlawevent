using Event.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Event.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly EventDBContext _dbContext;
        public EventController(EventDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/<EventController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event.Database.Event>>>Get()
        {
            if(_dbContext.Events==null)
            {
                return NotFound();
            }
            return await _dbContext.Events.ToListAsync();
        }

        // GET api/<EventController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Event.Database.Event>> Get(int id)
        {
            if (_dbContext.Events == null)
            {
                return NotFound();
            }
            var events = await _dbContext.Events.FindAsync(id);
            if (events == null)
            {
                return NotFound();
            }

            return events;
        }
    }
}
