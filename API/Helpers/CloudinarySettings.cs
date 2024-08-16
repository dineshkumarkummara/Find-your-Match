using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class CloudinarySettings
    {
        public required string CloudName { get; set; }
        public required string APIKey { get; set;}
        public required string SecretKey { get; set; }
    }
}