<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     *
     * @see http://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        $this->load->view('login');
    }

     public function test()
    {
         $this->load->library('session');

        $name= $this->input->post('username');
        $pass= $this->input->post('u_password');
        $querys=$this->db->query("select * from users where username='".$name."' and Password='".$pass."' ");
        $user= $querys->row();                   
       $user_data= $this->session->set_userdata('username', $user->FirstName);
       redirect('#/dashboard/home'); 

    }
    public function logout(){
        $this->session->sess_destroy();
         redirect('#/dashboard/home'); 
    }
}
