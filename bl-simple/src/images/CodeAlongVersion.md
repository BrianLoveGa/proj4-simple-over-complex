```
# Simple is better than Complex ....
# you will need to install python if haven't already to play this simple game
# https://www.python.org/ - go here to get it ...

# if you have little to no code experience
# go here https://wiki.python.org/moin/BeginnersGuide/NonProgrammers
# to get started

# simple game by Brian Loveless

# Inspired by :

# https://www.youtube.com/watch?v=xHPmXArK6Tg&t=46s
#  Python Text RPG  series by: Bryan Tong {btong}
#     AND
# https://www.youtube.com/watch?v=VXVCDHSzy6k
#  Python Text-Based Rpg series by: Vincent Gizzarelli {cryptero}

# for more python practice try out the Koans @
# https: // github.com/gregmalcolm/python_koans/wiki

# also you can visit https://docs.python-guide.org/ for lots of info


# WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
#######                                                                           #
#######                                                                           #
#######                         SIMPLE GAME   vz 1.1                              #
#######                                                                           #
#######                                                                           #
#######                 By: B _-_ Love -- (C) Nov 2019                            #
#######                                                                           #
#######                                                                           #
# <><<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>


# make a simple game playable through python or terminal - either command line
# or code writing program / interface / idle / some online code sandbox
# whatever makes you happy

# what makes a game ?
# 1) need a player ... that's you ... Thanks for playing. And thanks for reading.
# 2) need  something to do ... puzzles .... fight a bad guy ...
# 3) need to win or lose the game

# lets make it so that in order to have enough health and damage
# to fight the 'bad guy' and win you need to solve 3 simple riddles
# this is a simple game of text graphics .... just read to play
# type commands to play...

# to win solve 3 puzzles defeat 'bad guy'
# to lose - fight bad guy before solving puzzles and 'die'
```
*****
```
###### _-_-_-_ ##### SIMPLE GAME  ##### _-_-_-_ #####

# need to import python stuff
import sys    # _-_ imports the system module from the main python files on your computer
import os     # _-_ imports operating system module
import time   # _-_ imports time module to handle various operations related to time
import cmd    # _-_ imports command interpreter
import re     # _-_ Regex
import this   # _-_ imports Spam, spam, SPAM with a side of easter eggs. ... thx TIM

# make a player class


class Player:
    def __init__(self):   # initialize class
        self.name = ''    # you can enter your name in the game
        self.health = 10   # this won't be enough to fight the bad guy until you solve the riddles
        self.attack = 10  # also won't be enough to win until you solve the puzzles
        self.solve = 0  # 3 puzzles to solve


# initialize a player
myPlayer = Player()


# make a bad guy class




# initialize bad guy



# Lets keep it simple 1 bad guy and just 3 'riddles' to solve

# 1) Simple ...- What is 1 + 1 = ___ ?
#     answer = 2
# 2) Simple ...- Is learning fun ?  _____ ?
#     answer = 'yes'
# 3) Simple ...- Simple Is better than complicated true or false ?
#     answer = 'true'

# puzzle logic
# fight logic
# player attack
# bad guy attack back
# player hit
# bad guy hit
# player win
# player lose
# game loop logic
# need a menu to interact with the game pieces make a name make it ? fun ?
# also where instructions / story set up
# just thinking out all the parts ....  got a good guy a bad guy and 100+ lines
# Complex is better than complicated
# let the game begin

# we start with the puzzles










# now the fight


def player_fight():


# the battle


def player_attack():




def fight_win():
    print(" !!! Congrats  !!! \n")
   


# fight lose


# game win
def game_win():
    print("Congrats you won")


# game lose
def game_lose():

        print("OH NOOO YOU ARE DEAD  !!\n")
 
            

# check stats and make sure puzzles are adding attributes





# start game enter name

def start_game():
    # this tells system to clear the 'screen' either terminal or console
    os.system('clear')

    question0 = """ # Greetings and welcome to !: __Simple > Complex__ :! a simple 'game' coded in Python3 \n
                    Thank you for playing.  ### \n"""
    for character in question0:
        # this tells it to type each character in question 0
        sys.stdout.write(character)
        # one by one the characters appear .... makes it more like a game ... like a conversation....
        sys.stdout.flush()
        # a number closer to 1 (higher) is slower - a lower number is faster
        time.sleep(0.013)

    # what's in a name
    question1 = " Hello stranger ... I'm the narrator for this game ...\n... My Name is Brian. What's your name? ... \n ... Please enter it below. ...\n"
    for character in question1:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.04)  # little lower little faster
# the below code is courtsey of a kind stranger on Stack Overflow
#  Many Many thanks to Saraswatendra Singh for answering my question when I was struggling to solve this
#    problem of the name entered to be blank or spaces...
# https://stackoverflow.com/questions/58795383/how-do-you-prevent-an-empty-string-from-being-entered-via-user-input-in-python3

    regex = r'(.*?)\w(.*?)'
    player_name = input("==> ")  # where you enter your name for the game
    while (True):
        if player_name != 'None' and (re.match(regex, player_name)):
            myPlayer.name = player_name
            break
        else:
            print("#! HEY ____ YOU GOT A NAME RIGHT ? TYPE IT IN ... !#")
            player_name = input("==> ")

    # next we can assign the name you typed in input to the character above

    question2 = "Hello, " + myPlayer.name + " welcome to the game .... \n"
    for character in question2:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.08)  # lower is faster

    # we can stack the questions and the functions to print them

    intro1 = " . your health is  %i points .\n " % (myPlayer.health)
    intro2 = " .. your attacks deal out %i  hit points ..\n " % (
        myPlayer.attack)
    intro3 = " ... you have solved %i  puzzles out of 3...\n " % (
        myPlayer.solve)
    intro4 = " ......ARE you ready to play ? \n"
    intro5 = " ... " + myPlayer.name + " ???? \n"
    intro6 = " ... the bad guy has %i health points and will hit you with %i attack points.. \n" % (
        bad.health, bad.attack)
    intro7 = " ############################################################################### "
    for character in intro1:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in intro2:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.05)
    for character in intro3:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.04)
    for character in intro4:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.03)
    for character in intro5:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.02)
    for character in intro6:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.02)
    for character in intro7:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.02)
    os.system('clear')
    print("$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#")
    print("#$#                                                     #$#")
    print("#$#                  LETS BEGIN !!                      #$#")
    print("#$#               THE GAME STARTS NOW                   #$#")
    print("#$#                                                     #$#")
    print("#$#   please make your window at least wide enough      #$#")
    print("#$#                 to see this menu                    #$#")
    print("#$#       and tall enough to see this one               #$#")
    print("#$#                 and the one below it                #$#")
    print("#$#                                                     #$#")
    print("$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#")
    game_loop()

# end of introduction menu

#  game loop = prompt interation menu



# end of main game menu


# END OF SIMPLE GAME LOGIC

# when we type 'python3 simple.py' into terminal
# it will run this function which all the rest are tied to

start_game()

```