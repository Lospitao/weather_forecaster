<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;
use Nelmio;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;


}
