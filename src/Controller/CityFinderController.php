<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CityFinderController extends AbstractController
{
    /**
     * @Route("/city/finder", name="city_finder")
     */
    public function index(): Response
    {
        return $this->render('city_finder/index.html.twig', [
            'controller_name' => 'CityFinderController',
            'apiHost' => $this->getParameter('api_host'),
        ]);
    }
}
