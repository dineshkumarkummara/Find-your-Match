using API.Entities;
using API.ExtensionMethods;
using AutoMapper;

namespace API;

public class AutoMapperProfiles :Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<AppUser, MemberDTO>()
        .ForMember(x=>x.Age,o=>o.MapFrom(s=>s.DateOfBirth.CalculateAge()))
        .ForMember(d=>d.PhotoUrl,
        o=>o.MapFrom(s=>s.Photos.FirstOrDefault(x=>x.IsMain)!.Url));
        CreateMap<Photo,PhotoDTO>();
    }
}
