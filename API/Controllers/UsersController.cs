﻿using API.Data;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API;
[Authorize]
public class UsersController(IUserRepository userRepository) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers(){
        var users=await userRepository.GetMembersAsync();
        return Ok(users);
    }

    [HttpGet("{username}")]     // /api/users/2
    public async Task<ActionResult<MemberDTO>> GetUser(string username){
        var user= await userRepository.GetMemberAsync(username);
        if(user==null) return NotFound();  
        return user;
    }
}
