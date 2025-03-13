<?php

namespace App\DataFixtures;

use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class BookFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create("fr_FR");
        for($i=1;$i<=20;$i++){
            $book= new Book();
            $book->setTitle($faker->sentence)->setPublisher($faker->sentence)
                ->setYear($faker->numberBetween(1500,2025))->setBackcover($faker->sentence)->setIsbn($faker->numberBetween(1,999999));
            $manager->persist($book);
        }

        $manager->flush();
    }
}
