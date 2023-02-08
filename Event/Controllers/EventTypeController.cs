using Event.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Event.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventTypeController : ControllerBase
    {
        private readonly EventDBContext _dbContext;
        public EventTypeController(EventDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET: api/<EventTypeController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventType>>> Get()
        {
            if(_dbContext.EventsTypes==null)
            {
                return NotFound();
            }
            return await _dbContext.EventsTypes.ToListAsync();
        }

        // GET api/<EventTypeController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventType>> Get(int id)
        {
            if (_dbContext.EventsTypes == null)
            {
                return NotFound();
            }
            var eventTyps= await _dbContext.EventsTypes.FindAsync(id);
            if(eventTyps==null)
            {
                return NotFound();
            }
            return eventTyps;
        }

    }
}
