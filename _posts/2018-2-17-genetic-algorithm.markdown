---
layout: post
title: 遗传算法
date: 2018-02-17 22:10:18 +0800
categories: AI
tags: 计算智能 
img: http://wangweiguang.xyz/images/EA.jpg
---



* 
{:toc}
# 遗传算法的基本概念
遗传算法的基本思想是从初始种群出发，采用优胜劣汰、适者生存的自然法则选择个体，并通过杂交、变异来产生新一代种群，如此逐代进化，直到满足目标为止。遗传算法所涉及到的基本概念主要有以下几个：
* **种群**（Population）：种群是指用遗传算法求解问题时，初始给定的多个解的集合。遗传算法的求解过程是从这个子集开始的。
* **个体**（Individual）：个体是指种群中的单个元素，它通常由一个用于描述其基本遗传结构的数据结构来表示。
* **染色体**（Chromos）：染色体是指对个体进行编码后所得到的编码串。其中的每1位称为基因，若干个基因构成的一个有效信息段称为基因组。
* **适应度**（Fitness）函数：适应度函数是一种用来对种群中各个个体的环境适应性进行度量的函数。
* **遗传操作**（Genetic Operator）：遗传操作是指作用于种群而产生新的种群的操作。标准的遗传操作包括以下3种基本形式：
  * 选择（Selection）
  * 交叉（Crosssover）
  * 变异（Mutation）

# 遗传算法的基本过程
遗传算法主要由染色体编码、初始种群设定、适应度函数设定、遗传操作设计等几大部分所组成，其算法主要内容和基本步骤可描述如下：    
    1. 选择编码策略，将问题搜索空间中每个可能的点用相应的编码策略表示出来，即形成染色体；
    2. 定义遗传策略，包括种群规模N，交叉、变异方法，以及选择概率Pr、交叉概率Pc、变异概率Pm等遗传参数；
    3. 令t=0，随机选择N个染色体初始化种群P(0)；
    4. 定义适应度函数f（f>0）；
    5. 计算P(t)中每个染色体的适应值；
    6. t=t+1；
    7. 运用选择算子，从P(t-1)中得到P(t)；
    8. 对P(t)中的每个染色体，按概率Pc参与交叉；
    9. 对染色体中的基因，以概率Pm参与变异运算；
      10. 判断群体性能是否满足预先设定的终止标准，若不满足则返回(5)。

![image](http://wangweiguang.xyz/images/ycsf.jpg)

# 遗传编码
* **二进制编码**： 二进制编码是将原问题的结构变换为染色体的位串结构。在二进制编码中，首先要确定二进制字符串的长度l，该长度与变量的定义域和所求问题的计算精度有关。二进制编码存在的主要缺点是汉明（Hamming）悬崖。
* **格雷编码**： 格雷编码是对二进制编码进行变换后所得到的一种编码方法。这种编码方法要求两个连续整数的编码之间只能有一个码位不同，其余码位都是完全相同的。它有效地解决了汉明悬崖问题。
* **实数编码**：  实数编码是将每个个体的染色体都用某一范围的一个实数（浮点数）来表示，其编码长度等于该问题变量的个数。这种编码方法是将问题的解空间映射到实数空间上，然后在实数空间上进行遗传操作。由于实数编码使用的是变量的真实值，因此这种编码方法也叫做真值编码方法。实数编码适应于那种多维、高精度要求的连续函数优化问题。 

# 适应度函数
适应度函数是一个用于对个体的适应性进行度量的函数。通常，一个个体的适应度值越大，它被遗传到下一代种群中的概率也就越大。
* **原始适应度函数**：它是直接将待求解问题的目标函数f(x)定义为遗传算法的适应度函数。采用原始适应度函数的优点是能够直接反映出待求解问题的最初求解目标，其缺点是有可能出现适应度值为负的情况。  
* **标准适应度函数**：在遗传算法中，一般要求适应度函数非负，并其适应度值越大越好。这就往往需要对原始适应函数进行某种变换，将其转换为标准的度量方式，以满足进化操作的要求，这样所得到的适应度函数被称为标准适应度函数f<sub>Normal</sub>(x)。

# 遗传操作
* **选择操作**：选择（Selection）操作是指根据选择概率按某种策略从当前种群中挑选出一定数目的个体，使它们能够有更多的机会被遗传到下一代中。常用的选择策略可分为比例选择、排序选择和竞技选择三种类型。 
  * 比例选择：比例选择方法（Proportional Model）的基本思想是：各个个体被选中的概率与其适应度大小成正比。常用的比例选择策略包括轮盘赌选择、繁殖池选择。
  * 轮盘赌选择：轮盘赌选择法又被称为转盘赌选择法或轮盘选择法。在这种方法中，个体被选中的概率取决于该个体的相对适应度。而相对适应度的定义为：
    ![image](http://wangweiguang.xyz/image/lpd1.jpg)
    其中，P(xi)是个体xi的相对适应度，即个体xi被选中的概率；f(xi)是个体xi的原始适应度；是种群的累加适应度。

* **交叉操作**： 交叉（Crossover）操作是指按照某种方式对选择的父代个体的染色体的部分基因进行交配重组，从而形成新的个体。交配重组是自然界中生物遗传进化的一个主要环节，也是遗传算法中产生新的个体的最主要方法。根据个体编码方法的不同，遗传算法中的交叉操作可分为二进制交叉和实值交叉两种类型。
 * 二进制交叉： 二进制交叉（Binary Valued Crossover）是指二进制编码情况下所采用的交叉操作，它主要包括单点交叉、两点交叉、多点交叉和均匀交叉等方法。
 * 实值交叉：实值交叉是在实数编码情况下所采用的交叉操作，主要包括离散交叉和算术交叉，


* **变异操作**： 变异（Mutation）是指对选中个体的染色体中的某些基因进行变动，以形成新的个体。变异也是生物遗传和自然进化中的一种基本现象，它可增强种群的多样性。遗传算法中的变异操作增加了算法的局部随机搜索能力，从而可以维持种群的多样性。根据个体编码方式的不同，变异操作可分为二进制变异和实值变异两种类型。
  * 二进制变异：当个体的染色体采用二进制编码表示时，其变异操作应采用二进制变异方法。该变异方法是先随机地产生一个变异位，然后将该变异位置上的基因值由“0”变为“1”，或由“1”变为“0”，产生一个新的个体。 
  * 实值变异：当个体的染色体采用实数编码表示时，其变异操作应采用实值变异方法。该方法是用另外一个在规定范围内的随机实数去替换原变异位置上的基因值，产生一个新的个体。
    当个体的染色体采用实数编码表示时，其变异操作应采用实值变异方法。该方法是用另外一个在规定范围内的随机实数去替换原变异位置上的基因值，产生一个新的个体。
